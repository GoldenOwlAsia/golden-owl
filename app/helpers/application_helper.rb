module ApplicationHelper
  def fb_page_id
    Rails.application.secrets.fb_page_id
  end

  def google_api_key
    Rails.application.secrets.google_api_key
  end

  def portfolio_link
    Rails.application.secrets.portfolio_link
  end

  def career_link
    Rails.application.secrets.career_link
  end
end
