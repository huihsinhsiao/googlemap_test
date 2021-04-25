module LocationsHelper
  def google_map(center)
    "https://maps.googleapis.com/maps/api/staticmap?markers=size:small%7Ccolor:orange%7Clabel:C%7Ccenter=#{center}&size=500x500&zoom=17&key=#{Rails.application.credentials.google_api_key}"
  end
end
