remoteStr=`git remote -v`
key1="upstream"
key2="FEDarling/fe-translate-weekly"

echo $remote

result1=$(echo $remoteStr | grep "${key1}")
result2=$(echo $remoteStr | grep "${key2}")

if [[ "$result1" != "" && "$result2" != "" ]]
  then
    echo "\033[34m🚗开始拉取...\033[0m"
    git fetch upstream
    git checkout master
    git merge upstream/master
    echo "\033[32m🍻拉取完毕！\033[0m"
  else
    echo "\033[33m🧸未检查到upstream信息，可能您是首次拉取，已自动为您添加upstream信息\033[0m"
    git remote add upstream https://github.com/FEDarling/fe-translate-weekly.git
    git fetch upstream
    git checkout master
    git merge upstream/master
    echo "\033[32m🍻拉取完毕！\033[0m"
 fi

