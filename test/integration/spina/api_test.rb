require 'test_helper'

module Spina
  class ApiTest < ActionDispatch::IntegrationTest

    setup do
      host! "dummy.test"

      @routes = Engine.routes
      @account = FactoryBot.create :account
      @user = FactoryBot.create :user
      post "/admin/sessions", params: {email: @user.email, password: "password"}
    end

    test "API returns a json response" do
      get "/api/v1/pages"
      assert_includes response.header['Content-Type'], 'application/json'
    end

    test "Pages API returns homepage as first page" do
      get "/api/v1/pages"
      assert_equal response.parsed_body.dig("data", 0, "attributes", "title"), "Homepage"
    end

    test "Return a single page as json" do
      page = Page.live.regular_pages.first
      get "/api/v1/pages/#{page.id}"
      assert_equal response.parsed_body.dig("data", "attributes", "title"), page.title
    end

  end
end