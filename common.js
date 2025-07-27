function loadUrl()
{
	if(num>=1)
	{
		var url="https://tswa.s3.ap-southeast-2.amazonaws.com/TSEAN.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}
