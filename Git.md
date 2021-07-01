# :star: Git :star:

      > 正在连载中 ···

> Git 是目前世界上最先进的分布式版本控制系统（没有之一）。

**常见场景:**

(_基础部分不做详述_)

### 1.协作开发

_`git rebase` 变基_

多人协作开发时,很容易出现冲突。即使没有冲突，后 push 的童鞋不得不先 pull，在本地合并，然后才能 push 成功。

每次合并再 push 后，分支变成很乱.而 `rebase`可以把分叉的提交变成直线

### 2.创建标签

_`git tag `_

打标签非常简单，首先，切换到需要打标签的分支上;然后, `git tag v1.0`;

默认标签是打在最新提交的 commit 上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办？

方法是找到历史提交的 commit id，然后打上就可以了：

```
$ git tag v0.9 f52c633
```

还可以创建带有说明的标签，用-a 指定标签名，-m 指定说明文字：

```
$ git tag -a v0.1 -m "version 0.1 released" 1094adb
```

**注意：标签总是和某个 commit 挂钩。如果这个 commit 既出现在 master 分支，又出现在 dev 分支，那么在这两个分支上都可以看到这个标签。**

### 3.撤销修改

_`git checkout -- file` 丢弃工作区的修改_

`git checkout -- file` 命令中的`--`很重要，没有`--`，就变成了“切换到另一个分支”的命令.

现在假定是凌晨 3 点，你不但写了一些胡话，还 `git add` 到暂存区了：

庆幸的是，在 `commit` 之前，你发现了这个问题。用 `git status` 查看一下，修改只是添加到了暂存区，还没有提交：

Git 同样告诉我们，用命令 `git reset HEAD <file>`可以把暂存区的修改撤销掉（unstage），重新放回工作区：

`git reset` 命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用 HEAD 时，表示最新的版本。

### 4.配置别名

_`$ git config --global alias.st status`_

> 举例:

```
$ git config --global alias.ck checkout
$ git config --global alias.co commit
$ git config --global alias.br branch
$ git config --global alias.st status
```

_配置 Git 的时候，加上--global 是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。_

### 5.回退版本

_`git reset --hard HEAD^`_

Git 的版本回退速度非常快，因为 Git 在内部有个指向当前版本的 `HEAD` 指针，当你回退版本的时候，Git 仅仅是把 HEAD 从指向 另外一个节点.

- HEAD 指向的版本就是当前版本，因此，Git 允许我们在版本的历史之间穿梭，使用命令 `git reset --hard commit_id`。
- 穿梭前，用 `git log` 可以查看提交历史，以便确定要回退到哪个版本。
- 要重返未来，用 `git reflog` 查看命令历史，以便确定要回到未来的哪个版本。
