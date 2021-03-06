<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title> Cemil Uysal Activity5</title>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
    <form action="Activity5-preview.php" method="GET">
            
            <!-- Field Sets Labels -->
            <div class="registration">
                <h1>Registration Form</h1>
                <fieldset class="personal_info">
                    <legend>Personal info:</legend>
                    <p>
                        <label for="Name">Name:</label>
                        <input type="text" name="Name" maxlength=30 size="50" id="Name"/> 
                    </p>
                    <p>
                        <label for="Username">Username:</label>
                        <input type="text" name="Username" size="50" id="Username"/> 
                    </p>
                    <p>
                        <label for="Password">password:</label>
                        <input type="password" name="Password" size="50" id="Password"/> 
                    </p>
                    <p>
                        <label for="Address">Address:</label>
                        <input type="text" name="Address" size="50" id="Address"/> 
                    </p>
                    <p>
                        <label for="Country">Country:</label> 
                        <select name="Country">
                            <option selected>(Please Select a Country)</option>
                            <option value="Turkey">Turkey</option>
                            <option value="USA">USA</option>
                            <option value="England">England</option>
                        </select>
                    </p>
                    <p>
                        <label for="Zip">Zip Code:</label>
                        <input type="text" name="Zip" maxlength=50 size="50" id="Zip"/> 
                    </p>
                    <p>
                        <label for="Email">email:</label>
                        <input type="email" name="Email" maxlength=50 size="50" id="Email"/> 
                    </p>
                    <p class="small-input">
                        <label class="title">Sex:</label>
                        <label for="male">Male</label> <input type="radio" name="Sex" value="male" id="male" />
                        <label for="female">Female</label> <input type="radio" name="Sex" value="female" id="female"/>
                    </p>
                    <div class="clear"></div>
                    <p class="small-input">  
                    <label class="title">Language:</label>
                        <label for="English"> English </label> 
                        <input type="checkbox" name="Language[]" value="English" id="English"/>
                    
                        <label for="French"> French </label>
                        <input type="checkbox" name="Language[]" value="French" id="French"/>
                    
                        <label for="Germany"> Germany  </label>
                        <input type="checkbox" name="Language[]" value="Germany" id="Germany"/>
                    </p>
                    <div class="clear"></div>
                    <p>
                        <label for="About">About:</label>
                        <textarea name="About" rows="5" cols="60" id="About"></textarea>
                    </p> 
                    <input type="submit" id="sub_but" value="Submit" name="sub_but" />
                </fieldset>
            </div>
    </form>
</body>
</html>
