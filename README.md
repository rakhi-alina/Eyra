# Eyra

TODO: Write a project description

## Installation

TODO: Describe the installation process

## Usage

Quick description of folder structure:
* ##### AndroidApp  
  The entire Android app, java code and all. IDE used is Android Studio.
* ##### Backend  
  The Flask python code, which handles connections to the mysql database among other things. Also includes the schema for the database and sql code needed for setup. Recordings are saved in `server-interface/recordings/`. Number of useful scripts in `scripts/`.
* ##### Frockend (should be renamed)  
  Code to mock the frontend designed to test the QC (quality control).
* ##### Frontend  
  The AngularJS code and all related. deploy application using `grunt deploy` in the `da-webapp/` folder. Work in `src/` is then compiled into `app/`.
* ##### Local  
  Locally generated code, generated by the `Setup/setup.sh` script. Used mainly for the apache server.
* ##### Setup  
  Setup of the app. Running `setup.sh` installs the webapp from scratch. Includes code for the apache server, the database setup and the frontend setup.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license