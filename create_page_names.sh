#!/bin/bash

# 遍歷src/pages目錄下的所有檔案
for file_path in src/pages/*; do
    # 提取檔案名稱（不包含路徑）
    file_name=$(basename "$file_path")
    # 提取檔案名稱（不包含副檔名）
    page_name="${file_name%.*}"
    # 將檔案名稱加入陣列，使用逗號分隔並用雙引號包起來
    page_names+="\"$page_name\","
done

# 移除最後一個逗號
page_names=${page_names%,}

# 將陣列轉換為逗號分隔的字串並寫入page_names.json
echo "[$page_names]" > ./src/page_names.json

echo "已生成 page_names.json 檔案。"
