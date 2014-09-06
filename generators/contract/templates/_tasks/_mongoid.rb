namespace :mongoid do
  task :serve do
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
  end
end
