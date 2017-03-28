POSTS := $(patsubst src/posts/%.md, dest/posts/%.html,$(wildcard src/posts/*.md))

all: build deploy
build: index static $(POSTS)
index:
	mustache src/templates/index.yaml src/templates/index.mustache > dest/index.html
static:
	rsync -r src/static/ dest/static/ --delete
dest/posts/%.html: src/posts/%.md
	pandoc $< -s --to=html5 --template=src/templates/post_template.html --katex > $@
deploy:
	rsync -a dest/ root@104.236.220.204:/home/www --delete
clean:
	rm dest/posts/*
	rm -rf dest/static
