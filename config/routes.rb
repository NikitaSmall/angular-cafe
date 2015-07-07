Rails.application.routes.draw do

  get 'orders/all'

  get 'orders/show'

  get 'orders/create'

  get 'orders/update'

  get 'orders/delete'

  get 'options/all'

  get 'options/set_options'

  root 'home#index'

  get '/tables/tables' => 'tables#all'
  get '/tables/:id' => 'tables#show'

  post '/tables' => 'tables#save_tables', defaults: { format: 'json' }

  get '/rooms/rooms' => 'rooms#all'
  get '/rooms/:id' => 'rooms#show'

  post '/rooms' => 'rooms#create', defaults: { format: 'json' }
  put '/rooms' => 'rooms#update', defaults: { format: 'json' }
  delete '/rooms' => 'rooms#destroy', defaults: { format: 'json' }

  get '/categories/categories' => 'categories#all'

  post '/categories' => 'categories#create', defaults: { format: 'json' }
  delete 'categories' => 'categories#destroy', defaults: { format: 'json' }

  post 'products' => 'products#create', defaults: { format: 'json' }
  delete '/products' => 'products#destroy', defaults: { format: 'json' }

  get '/options' => 'options#all'
  get '/options/:name' => 'options#show'

  post '/options' => 'options#set_options', defaults: { format: 'json' }

  get '/orders/orders' => 'orders#all'
  get '/orders/:id' => 'orders#show'

  post '/orders' => 'orders#create', defaults: { format: 'json' }
  put '/orders' => 'orders#update', defaults: { format: 'json' }
  delete '/orders' => 'orders#destroy', defaults: { format: 'json' }

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
