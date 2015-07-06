unless @option.nil?
  json.extract! @option, :id, :name, :value
end
