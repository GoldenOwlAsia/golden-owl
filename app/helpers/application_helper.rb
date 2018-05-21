module ApplicationHelper
  def fb_page_id
    Rails.application.secrets.fb_page_id
  end

  def google_api_key
    Rails.application.secrets.google_api_key
  end

  def a(name)
    "cuong"
  end
end
