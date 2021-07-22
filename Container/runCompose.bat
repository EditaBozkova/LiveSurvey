set COMPOSE_CONVERT_WINDOWS_PATHS=1
docker-compose -p LiveSurvey up -d --build
pause
docker-compose -p LiveSurvey down
