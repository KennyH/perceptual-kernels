#!/usr/bin/env sh
#
#
# Loads the HIT $STUDY_HOME/exp/color/l5/color-l5 to run in the Amazon Mechanical Turk sandbox site.
#
#
cd $MTURKCLT_HOME/bin
./loadHITs.sh $1 $2 $3 $4 $5 $6 $7 $8 $9 \
-sandbox \
-label $STUDY_HOME/exp/color/l5/color-l5 \
-input $STUDY_HOME/exp/color/l5/color-l5.input \
-question $STUDY_HOME/exp/color/l5/color-l5.question \
-properties $STUDY_HOME/exp/color/l5/color-l5.properties
cd $STUDY_HOME/exp/color/l5/
