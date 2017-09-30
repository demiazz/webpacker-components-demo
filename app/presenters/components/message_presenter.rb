module Components
  class MessagePresenter < Keynote::Presenter
    presents :message

    delegate :author, to: :message

    def posted_at
      created_at = message.created_at

      l(created_at, format: created_at > Time.now - 24.hours ? :today : :older)
    end

    def text
      build_html do
        message.text.lines do |line|
          p do
            line
          end
        end
      end
    end
  end
end
