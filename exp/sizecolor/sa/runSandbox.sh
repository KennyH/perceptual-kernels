#!/usr/bin/env sh
#
#
# Loads the HIT $STUDY_HOME/exp/sizecolor/sa/sizecolor-sa to run in the Amazon Mechanical Turk sandbox site.
#
#
cd $MTURKCLT_HOME/bin
./loadHITs.sh $1 $2 $3 $4 $5 $6 $7 $8 $9 \
-sandbox \
-label $STUDY_HOME/exp/sizecolor/sa/sizecolor-sa \
-input $STUDY_HOME/exp/sizecolor/sa/sizecolor-sa.input \
-question $STUDY_HOME/exp/sizecolor/sa/sizecolor-sa.question \
-properties $STUDY_HOME/exp/sizecolor/sa/sizecolor-sa.properties
cd $STUDY_HOME/exp/sizecolor/sa/
