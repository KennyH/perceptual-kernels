#!/usr/bin/env sh
#
#
# Loads the HIT $STUDY_HOME/exp/shapecolor/sa/shapecolor-sa to run in the Amazon Mechanical Turk site
# (sandbox or production, depending on the setting of service_url in $MTURKCLT_HOME/bin/mturk.properties)
#
#
$MTURKCLT_HOME/bin/loadHITs.sh $1 $2 $3 $4 $5 $6 $7 $8 $9 \
-label $STUDY_HOME/exp/shapecolor/sa/shapecolor-sa \
-input $STUDY_HOME/exp/shapecolor/sa/shapecolor-sa.input \
-question $STUDY_HOME/exp/shapecolor/sa/shapecolor-sa.question \
-properties $STUDY_HOME/exp/shapecolor/sa/shapecolor-sa.properties
