docker build . -f build.Dockerfile -t blog   
docker create --name built_blog blog
timeout 1
rmdir .\dist /S /q
timeout 1
docker cp built_blog:/code/dist ./dist
docker rm built_blog