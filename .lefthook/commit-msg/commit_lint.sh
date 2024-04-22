INPUT_FILE=$1
START_LINE=`head -n1 $INPUT_FILE`
PATTERN="^(FEAT)-[[:digit:]]+: "
if ! [[ "$START_LINE" =~ $PATTERN ]]; then
  echo "Bad commit message, see example: FEAT-123: something"
  exit 1
fi
