json.extract! todo, :id, :title, :memo, :date, :created_at, :updated_at
json.url todo_url(todo, format: :json)
