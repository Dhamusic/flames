
function flames()
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    
    var c = new String(a);
    var d = new String(b);
    var e = c.length;
    var f = d.length;
    var z = c.toUpperCase();
    var y = d.toUpperCase();
    var count=0;

    if((z=="DHAMODHARAN" && y=="DIVYAPRIYA") || (z=="DIVYAPRIYA" && y=="DHAMODHARAN" ))
    {
        document.write(" Ammaa pullaiii... ");
    }

    else
    {
    for(var i=0;i<e;i++)
    {
        for(var j=0;j<f;j++)
        {
            if(z[i]==y[j])
            {
                count++;
                y=y.replace(y[j],'');
                break;
            }
        }
    }

    g=(e+f)-(2*count);
    var h = new String();
    
    if(g==1)
        h="Sister";
    if(g==2)
        h="Enemy";
    if(g==3)
        h="Friend";
    if(g==4)
        h="Enemy";
    if(g==5)
        h="Friend";
    if(g==6)
        h="Marriage";
    if(g==7)
        h="Enemy";
    if(g==8)
        h="Affection";
    if(g==9)
        h="Enemy";
    if(g==10)
        h="Love";
    if(g==11)
        h="Marriage";
    if(g==12)
        h="Affection"; 
    if(g==13)
        h="Affection";       
    if(g==14)
        h="Friend";
    if(g==15)
        h="Marriage";
    if(g==16)
        h="Friend";    
    if(g==17)
        h="Affection";     
    if(g==18)
        h="Friend";
    if(g==19)
        h="Love";
    if(g==20)
        h="Enemy";

    {
        document.write( h );
    }
}}

