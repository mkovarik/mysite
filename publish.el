(setq org-publish-project-alist
  '(
     ("posts"
      :base-directory "src/posts/"
      :base-extension "org"
      :publishing-directory "dest/posts/"
      :publishing-function org-html-publish-to-html 
     )
     ("static"
      :base-directory "src/posts/"
      :base-extension any
      :recursive t
      :publishing-function org-publish-attachment
     )
     ("build"
      :components ("posts static")
     )
   )
)
