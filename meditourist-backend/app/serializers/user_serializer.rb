class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :budget
end
