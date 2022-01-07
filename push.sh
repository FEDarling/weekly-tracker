# 使用方法：
# 1. 授予权限 chmod +x ./push.sh 或者 chmod 777 push.sh
# 2. 终端执行 ./push.sh

git add .

echo "请输入commit信息"

read commitString

git commit -m commitString

git push origin master