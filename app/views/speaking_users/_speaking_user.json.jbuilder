json.extract! speaking_user, :id, :first_name, :last_name, :email, :event, :message, :created_at, :updated_at
json.url speaking_user_url(speaking_user, format: :json)