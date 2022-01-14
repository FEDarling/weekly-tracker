echo "\033[34m🚗开始推送...\033[0m"
git add .

git commit -m "$1"

git push origin master
echo "\033[32m🍻推送成功！\033[0m"