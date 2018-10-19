import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production. Wait for a moment....'.blue);

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err.bold.red);
        return;
    }
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('build is genarated with warning:'.bold.yellow);
        return jsonStats.warnings.map(warning => console.log(warning.red));
    }

    console.log('I am Vipin')
    console.log(`webpack stats: ${stats}`);

    console.log('your app is compiled in prod mode and written to /dist folder'.green);

    return 0;
}

)