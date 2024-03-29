# Read challenge number

echo "Enter challenge number: "
read challenge_number

# Try create challenge directory inside src/retos

if [ ! -d src/retos/$challenge_number ]; then
  mkdir src/retos/$challenge_number
  echo "\e[32m ✓ Challenge $challenge_number directory created\e[0m"
else
  echo "\e[31m ✗ Challenge $challenge_number directory already exists\e[0m"
  # ask if want to overwrite
  echo "Do you want to overwrite the challenge directory? (y/n)"
  read overwrite
  if [ $overwrite = "y" ]; then
    rm -r src/retos/$challenge_number
    mkdir src/retos/$challenge_number
    echo "\e[32m ✓ Challenge $challenge_number directory created\e[0m"
  else
    echo "\e[31m ✗ Process aborted\e[0m"
    exit 1
  fi
fi

# Create index.html and styles.css files inside src/retos/$challenge_number
# from templates

cp src/retos/templates/template.html src/retos/$challenge_number/index.html
cp src/retos/templates/template.css src/retos/$challenge_number/styles.css

echo "\e[32m ✓ Challenge $challenge_number files created\e[0m"

# Replace #N with the challenge number in index.html

sed -i "s/#N/$challenge_number/g" src/retos/$challenge_number/index.html

# Ask for JavaScript file creation

echo "Do you want to create a JavaScript file? (y/n)"
read create_js

if [ $create_js = "y" ]; then
  cp src/retos/template.js src/retos/$challenge_number/scripts.js
  sed -i "s/#N/$challenge_number/g" src/retos/$challenge_number/scripts.js
  echo "\e[32m ✓ JavaScript file created\e[0m"
fi

# Create the Astro page for the challenge

cp src/retos/templates/template.Astro src/pages/retos/$challenge_number.astro

echo "\e[32m ✓ Astro page created\e[0m"

# Replace #N with the challenge number

sed -i "s/#N/$challenge_number/g" src/pages/retos/$challenge_number.astro

echo "\e[32m *** Process completed [$challenge_number] ***\e[0m"
