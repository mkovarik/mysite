from subprocess import run
from os.path    import basename, splitext, join
from glob       import glob

# compile index

f = open('dest/index.html', 'w')
run(['mustache', 'src/archive.yaml', 'src/index.html.mustache'], stdout = f)
f.close()

# copy static files

run(['rsync', '-r', 'src/static/', 'dest/static', '--delete'])

# compile blog posts

posts = glob('src/posts/*.md')
for source in posts:
    name = basename(source)
    dest = join( 'dest/posts', splitext(name)[0] + '.html')
    run(['pandoc', source,'-o', dest,
         '--from=markdown',
         '-s',
         '--to=html5',
         '--template=src/postemp.html',
         '--katex'])
    
