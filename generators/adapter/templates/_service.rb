require 'Mongoid'

module Mongodb
  class <%= Service %>
    include Mongoid::Document

    field :name
  end
end
