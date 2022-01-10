# 使用方法：
# 1. 授予权限 chmod +x ./pull.sh  或者 chmod 777 pull.sh
# 2. 终端执行 ./pull.sh

git fetch upstream

git checkout master

git merge upstream/master

