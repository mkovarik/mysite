all: build deploy
.PHONY: clean static build math111 depoloy math110
build: dest/index.html static math111 math110
dest/index.html: src/index.html
	cp $^ $@
static:
	rsync -r src/static/ dest/static/ --delete
math110:
	mdbook build src/math110/
math111:
	mdbook build src/math111/
deploy:
	rsync -a dest/ root@104.236.220.204:/home/www --delete
clean:
	rm dest/posts/*
	rm -rf dest/static
