<?php
// Optional. Copy to ../../goldwert-config.php (outside the web root) or to ./config.php and fill in.
// Without a key the price comes from gold-api.com (free, no key) with plausibility checks and
// confirmation of large moves by a second reading.
return [
    // Cross-check (recommended, free): key from https://metalcharts.org/metals-api (200 calls/month,
    // commercial use allowed; the value is only compared, never displayed).
    'metalcharts_key' => 'HIER-DEN-METALCHARTS-KEY-EINTRAGEN',
];
