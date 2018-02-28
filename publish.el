(provide 'publish)
(with-eval-after-load 'org
  (require 'ox-publish)
  (setq org-publish-project-alist
        '(("org-files"
           :base-directory "src/"
           :base-extention "org"
           :publishing-directory "dest/"
           :publishing-function org-html-publish-to-html
           :recursive nil
           )
          ("static"
           :base-directory "src/static/"
           :base-extension any
           :recursive t
           :publishing-directory "dest/static/"
           :publishing-function org-publish-attachment
           )
          ("www"
           :components ("org-files" "static")
           )))

  (org-publish "www" t))
