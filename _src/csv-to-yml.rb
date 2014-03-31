require 'csv'
require 'yaml'

data = CSV.read('txp_image.csv', :headers => true).map(&:to_hash)

File.open('images.yml', 'w') { |f| f.write(data.to_yaml) }