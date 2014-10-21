namespace :mongoid do
  task :serve do
    require "mongoid"

    Rake::Task['before:mongoid'].invoke if Rake::Task.task_defined?('before:mongoid')
    
    module Mongoid
      module Document
        def as_json(options={})
          attrs = super(options)
          attrs['id'] = attrs['_id'].to_s
          attrs
        end
      end
    end

    Mongoid.load!("#{ENV['BASEDIR']}/contracts/mongoid.yml")
    
    Rake::Task['after:mongoid'].invoke if Rake::Task.task_defined?('after:mongoid')
  end
end
