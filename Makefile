all: build deploy
.PHONY: clean static build depoloy
build: dest/index.html static
dest/index.html: src/index.html
	cp $^ $@
static:
	rsync -r src/static/ dest/static/ --delete
deploy:
	rsync -a dest/ root@104.236.220.204:/home/www --delete
clean:
	rm dest/posts/*
	rm -rf dest/static/
