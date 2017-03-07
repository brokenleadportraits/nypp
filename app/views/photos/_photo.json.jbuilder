json.extract! photo, :id, :name, :description, :image_url, :created_at, :updated_at
json.url photo_url(photo, format: :json)
