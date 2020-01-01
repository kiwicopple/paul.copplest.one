
REPO_DIR=$(shell pwd)

help:
	@echo "\HELP\n"
	@echo "make push        # push to github and to gitlab"


push:
	git push origin
	git push gitlab

