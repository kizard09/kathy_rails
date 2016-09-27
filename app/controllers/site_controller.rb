class SiteController < ApplicationController


  def home
    @title = 'Home | Kathy Izard'
    @description = 'This is the homepage for Kathyizard.com and her quest to find meaning later in life. Speaker, motivator, author and mother, she wants to know what is calling you.'
    @keywords = 'inspirational author, motivational speaker, homelessness, trust the whisper, activist, Kathy Izard'
  end

  def aboutme
    @title = 'About Kathy | Kathy Izard'
    @description = 'Kathy Izard is an inspirational speaker, author, mother, and activist, calling for women of all ages to Trust the Whisper.'
    @keywords = 'inspirational author, motivational speaker, homelessness, trust the whisper, activist, Kathy Izard'
  end

  def mooreplace
    @title = 'Moore Place | Kathy Izard'
    @description = 'Moore Place was the first permanent supportive housing solution in Charlotte to house chronically homeless men and women directly from street to home using the Housing First philosophy.'
    @keywords = 'moore place, chronically homeless, housing, philanthropy, permanent supportive housing, supportive housing, urban ministries center, urban ministries center charlotte'
  end

  def aboutyou
    @title = 'About You | Kathy Izard'
    @description = 'If you are looking for a purpose, whether it is as big as a building or as small as random acts of kindness, share it here.'
    @keywords = 'whats your calling, calling, i need a purpose, inspiration'
  end

  def speaking
    @speaking_user = SpeakingUser.new
    @title = 'Speaking | Kathy Izard'
    @description = 'Have Kathy Izard speak at your event to inspire and inform about homelessness and mental illness.'
    @keywords = 'motivational speaker, speaker, Kathy Izard speaking, homelessness expert, mental illness expert, mental illness speaker, homelessness speaker'
  end

  def media
    @title = 'Media | Kathy Izard'
    @description = 'Submit a media request for Kathy Izard, author of The Hundred Story Home'
    @keywords = 'speak to Kathy Izard, media Kathy Izard, Kathy Izard email, Kathy Izard media request'
  end

  def contact
    @contact_user = ContactUser.new
    @title = 'Contact | Kathy Izard'
    @description = 'Contact Kathy Izard, author of The Hundred Story Home, about your dreams, homelessness, mental illness or just to say hi.'
    @keywords = 'contact Kathy Izard, message Kathy Izard, Kathy Izard email, Kathy Izard contact'
  end

  def book
    @title = 'The Hundred Story Home | Kathy Izard'
    @description = 'The Hundred Story Home is a memoir by Kathy Izard about a Journey of Homelessness, Hope, and Healing. Learn to Trust the Whisper.'
    @keywords = 'memoir, inspirational book, homelessness, buy the hundred story home, Kathy Izard'
  end
  def not_found
    respond_to do |format|
      format.html { render status: 404 }
    end
  rescue ActionController::UnknownFormat
    render status: 404, text: "nope"
  end
end
