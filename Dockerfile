FROM ruby:3.2-alpine

RUN apk add --no-cache build-base git shared-mime-info

WORKDIR /usr/src/app

RUN gem install bundler

# The asterisk (*) makes Gemfile.lock optional so the build won't fail if it's missing
COPY Gemfile Gemfile.lock* ./
RUN bundle install

COPY . /usr/src/app

EXPOSE 4500

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4500", "--force_polling"]