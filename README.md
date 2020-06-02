# Creating-a-stopWatch-using-ReactJS

### StopWatch functionalities are done
### Backend functionality for storing logs in DB is left.
# For instructions and new versions of this Gist go to:
# https://gist.github.com/julianpoemp/bcf277cb56d2420cc53ec630a04a3566
# Version 1.4.0

<IfModule mod_rewrite.c>
	RewriteEngine On

 	# -- REDIRECTION to https (optional):
	# If you need this, uncomment the next two commands
	# RewriteCond %{HTTPS} !on
  	# RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
	# --

	RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
	RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d

	RewriteRule ^.*$ - [NC,L]
	RewriteRule ^(.*) index.html [NC,L]
</IfModule>

#------------ BROWSER CACHING (optional)
# Disable browser caching in production. You can add/remove file extension as you wish.
#<FilesMatch "\.(html|htm|js|json|css)$">
#	<IfModule mod_headers.c>
#		FileETag None
#		Header unset ETag
#		Header unset Pragma
#		Header unset Cache-Control
#		Header unset Last-Modified
#		Header set Pragma "no-cache"
#		Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
#		Header set Expires "Mon, 10 Apr 1972 00:00:00 GMT"
#	</IfModule>
#</FilesMatch>
#------------
