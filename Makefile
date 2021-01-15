region=us-east-1
stack-name=interface-recognition
cmd_complement=--region $(region)
deploy:
	aws cloudformation deploy \
	--stack-name $(stack-name) \
	--template-file $(stack-name).yml \
	--capabilities CAPABILITY_NAMED_IAM $(cmd_complement) \
	--parameter-overrides UrlName=interface-recognition.tk 
remove: 
	aws cloudformation delete-stack --stack-name $(stack-name) $(cmd_complement)