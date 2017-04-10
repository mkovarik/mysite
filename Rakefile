require 'pathname'
require 'rake'

# Create homepage
directory "dest"
index_template = "src/index.mustache"
metadata = "src/index.yaml"
task :homepage => ["dest", index_template, metadata] do
  sh "mustache #{metadata} #{index_template} > dest/index.html"
end

# Compile markdown to html
directory "dest/posts"
posts_md = Dir.glob('src/posts/*.txt')
posts_html = []
post_template = 'src/post_template.html'
posts_md.each do |post|
  target = Pathname(post).basename.to_s
  target = 'dest/posts/' + target.ext('html')
  posts_html << target
  file target => [post, "dest/posts"] do |t|
    sh "pandoc #{post} -s --to=html5 --template=#{post_template} --katex > #{target}"
  end
end
task :blog => posts_html

# rsync static files
task :static do 
  sh "rsync -r src/static/ dest/static/ --delete"
end

# Build everything
task :default => [:homepage, :blog, :static]

# Clean
task :clean do
  sh "rm -rf dest"
end

# Deploy to server
ip_addr = "104.236.220.204"
task :deploy => "dest" do
  sh "rsync -a dest/ root@#{ip_addr}:/home/www --delete"
end
