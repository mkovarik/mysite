POSTS := $(patsubst src/posts/%.txt, dest/posts/%.html,$(wildcard src/posts/*.txt))

all: build deploy
build: dest/index.html static $(POSTS)
dest/index.html: src/index.yaml src/index.mustache
	mustache $^ > $@
static:
	rsync -r src/static/ dest/static/ --delete
dest/posts/%.html: src/posts/%.txt src/post_template.html
	pandoc $< -s --to=html5 --template=src/post_template.html --katex > $@
deploy:
	rsync -a dest/ root@104.236.220.204:/home/www --delete
clean:
	rm dest/posts/*
	rm -rf dest/static
