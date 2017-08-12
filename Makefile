all: build deploy
.PHONY: clean static build math111 depoloy blog 
build: dest/index.html static blog math111
dest/index.html: src/index.yaml src/index.mustache
	mustache $^ > $@
static:
	rsync -r src/static/ dest/static/ --delete
blog:
	mdbook build src/blog/
math111:
	mdbook build src/math111/ 
deploy:
	rsync -a dest/ root@104.236.220.204:/home/www --delete
clean:
	rm dest/posts/*
	rm -rf dest/static
