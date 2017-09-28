all: build deploy
.PHONY: clean static build math111 depoloy blog math110 financial_statistics
build: dest/index.html static blog math111 math110 financial_statistics
dest/index.html: src/blog/index.yaml src/index.html
	mustache $^ > $@
static:
	rsync -r src/static/ dest/static/ --delete
blog:
	mdbook build src/blog/
math110:
	mdbook build src/math110/
math111:
	mdbook build src/math111/
financial_statistics:
	mdbook build src/financial_statistics/
deploy:
	rsync -a dest/ root@104.236.220.204:/home/www --delete
clean:
	rm dest/posts/*
	rm -rf dest/static
