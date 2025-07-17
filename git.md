# use git

This article record how to use `git` to manage a project.



## 安装git

To use git, we should install it right ?

> [Git - 安装 Git (git-scm.com)](https://git-scm.com/book/zh/v2/起步-安装-Git) 
>
> [Git - Downloading Package (git-scm.com)](https://git-scm.com/download/win) 

choose a correct version for your computer, if you are using **Windows** OS and don't know which version you should choose.

typing `systeminfo` in **cmd** to show what type of your computer(you can see x86 or x64).





## 给项目设置仓库

列出所有远程仓库

~~~shell
git remote -v
~~~

然后给项目添加远程仓库

~~~shell
git remote add <remote_name> <remote_url>
~~~

现在项目内是没有分支的，需要提交一次才能创建分支。在此之前，先修改默认分支。

~~~shell
git checkout -b main  # main是GitHub的默认分支
git add ./LICENSE ./README.MD
git commit -m "Initial local commit"  # 建议描述清晰，添加"local"，"本地"等词

# git branch // 查看分支会得到如下内容
# *main
#  master
~~~

分支确定好之后，可以关联本地分支和 `Github` 仓库分支了。

~~~shell
# 拉取合并
git pull origin main --allow-unrelated-historie
# 同步云端
git push --set-upstream origin main
~~~

在创建 `Github` 仓库后如果勾选了创建 readme 文件和 license 文件，就可能和当前发生冲突。

~~~shell
git status

# On branch main
# Your branch and 'origin/main' have diverged,
# and have 1 and 1 different commits each, respectively.
#   (use "git pull" if you want to integrate the remote branch with yours)

# You have unmerged paths.
#   (fix conflicts and run "git commit")
#   (use "git merge --abort" to abort the merge)

# Unmerged paths:
#   (use "git add <file>..." to mark resolution)
#         both added:      README.md

# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#         .gitignore
#         .vscode/
#         ...

~~~

我们需要合并他们，使用 webstorm 可以使用它的 `GUI` 工具**一键合并**，非常方便。当然，也可以再提交一次作为**手动合并**。



## 仓库改名

假如仓库改名了，本地项目还在使用git原来的remote地址，是无法使用的，需要修改。

~~~bash
git remote set-url origin https://xxxx.xxxx.git 
~~~

修改到新地址



## Git Credential Manager

**Git Credential Manager (GCM)** 是一个用于管理 Git 凭证（用户名、密码、个人访问令牌等）的工具，它可以帮助你在与远程 Git 仓库（如 GitHub、GitLab、Bitbucket 等）进行交互时，安全地存储和自动管理身份验证信息。

在使用 Git 进行版本控制时，你通常需要与远程仓库进行交互，例如克隆仓库、推送代码或拉取更新。这些操作通常需要身份验证，而身份验证信息（如用户名和密码）可能需要频繁输入。Git Credential Manager 的主要作用是：

- **自动保存凭证**：在第一次输入用户名和密码后，GCM 会将这些信息安全地存储起来，后续操作时无需重复输入。
- **提高安全性**：GCM 会将凭证加密存储在操作系统的安全存储中（如 Windows 的凭据管理器或 macOS 的 Keychain）。
- **支持多种认证方式**：除了用户名和密码，GCM 还支持个人访问令牌（Personal Access Token, PAT）、OAuth 等认证方式。
- **简化多账号管理**：如果你有多个 Git 账号，可以自动管理。



**启用 GCM**：

```bash
# 新建一个helper
git config --global credential.helper manager-core
# 启用它
git config --global credential.useHttpPath true
```

**验证配置**：

```bash
git config --global --get credential.helper
```

**清除凭据:** 

```bash
git credential-manager erase
```



## git设置账号

设置全局，以后每次提交如果没有当前项目的git账号，则会使用这个账号

~~~bash
git config --global user.name "loafday"
git config --global user.email "loafday0@gmail.com"
~~~



只给当前项目设置

~~~bash
git config user.name "rimnithl"
git config user.email "frostisle@163.com"
~~~



## git 代理

~~~bash
// http|https
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890

// 查看
git config --global --get http.proxy
git config --global --get https.proxy

// 取消
git config --global --unset http.proxy
git config --global --unset https.proxy
~~~





## git commit 规范



