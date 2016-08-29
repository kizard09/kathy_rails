json.extract! contact_user, :id, :name, :first_name, :last_name, :email, :message, :created_at, :updated_at
json.url contact_user_url(contact_user, format: :json)