json.array! @tables do |table|
  json.extract! table, :id, :name, :x, :y, :description, :inscription, :skype
end