namespace :spina do

  desc "Generate all pages based on the theme config"
  task bootstrap: :environment do
    Spina::Account.first.save
  end

  desc "Update translations after adding locales"
  task update_translations: :environment do
    Spina.locales.each do |locale|
      Mobility.with_locale(locale) do

        Spina::Page.all.order(:id).each do |page|
          page.title = page.title(fallback: I18n.fallbacks[locale])
          page.save
        end

      end
    end
  end
  
  namespace :tailwind do
    desc "Compile Tailwind.css for Spina"
    task :compile do
      Dir.chdir(File.join(__dir__, "../..")) do
        system "NODE_ENV=production npx tailwindcss-cli@latest build ./app/assets/stylesheets/spina/src/tailwind.css -o ./app/assets/stylesheets/spina/application.scss -c ./config/tailwind.config.js"
      end
    end
    
    desc "Compile Tailwind.css in development mode for Spina"
    task :compile_dev do
      Dir.chdir(File.join(__dir__, "../..")) do
        system "npx tailwindcss-cli@latest build ./app/assets/stylesheets/spina/src/tailwind.css -o ./app/assets/stylesheets/spina/application.scss -c ./config/tailwind.config.js"
      end
    end
  end

end
