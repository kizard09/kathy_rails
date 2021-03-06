Rails.application.routes.draw do
  # mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  
  resources :speaking_users
  resources :categories
  # resources :tags
  resources :contact_users

  root 'site#home'

  get 'tags/:tag', to: 'posts#index', as: "tag"

  get 'site/aboutme'

  get 'site/mooreplace'

  get 'site/aboutyou'

  get 'site/speaking'

  get 'site/media'

  get 'site/contact'

  get 'site/readersstories'

  get 'site/book'

  get 'site/contact_email'

  get 'site/speaking_email'

  get 'site/littlelibrary'
  
  get 'your_posts' => 'blog_posts#your_posts'
  get 'user_posts' => 'blog_posts#user_posts'
  
  resources :comments
  resources :blog_posts

  get 'blog_posts/index'



  get "*any", via: :all, to: "site#not_found"

end
